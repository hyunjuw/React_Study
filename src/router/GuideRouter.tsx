import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ListIA from "@guide/ListIA";
import ListGuide from "@guide/ListGuide";
// convention
// import RuleCode from "@guide/convention/RuleCode";
// import RuleIntro from "@guide/convention/RuleIntro";
// import RuleName from "@guide/convention/RuleName";
// import RuleStandard from "@guide/convention/RuleStandard";
// // accessibility
import WaIndex from "@guide/accessibility/WaIndex";
// import WaWai from "@/views/_guide/accessibility/WaWai";
// // plan
// import Colors from "@guide/plan/Colors";
// import Typography from "@guide/plan/Typography";
// // components
// import Accordion from "@/views/_guide/components/Accordion";
// import Modal from "@guide/components/Modal";
// import BottomSheet from "@/views/_guide/components/BottomSheet";
// import Swiper from "@guide/components/Swiper";
// import Tab from "@guide/components/Tab";
// import Toast from "@guide/components/Toast";
// import Tooltip from "@guide/components/Tooltip";
// import TextField from "@guide/components/TextField";
// import Checkbox from "@/views/_guide/components/Checkbox";
// import Radio from "@guide/components/Radio";
// import Select from "@guide/components/Select";
// import Dropdown from "@/views/_guide/components/Dropdown";
// import Button from "@/views/_guide/components/Button";
// import Icon from "@/views/_guide/components/Icon";
// // error
// import NoMatch from "@guide/NoMatch";

function GuideRouter() {
  const [url, setUrl] = useState("");
  const location = useLocation();
  const [changeUrl, setChangeUrl] = useState();
  let id: any, values: any;
  const routeArray: any = {
    // RuleCode: <RuleCode></RuleCode>,
    // RuleIntro: <RuleIntro></RuleIntro>,
    // RuleName: <RuleName></RuleName>,
    // RuleStandard: <RuleStandard></RuleStandard>,
    WaIndex: <WaIndex></WaIndex>,
    // WaWai: <WaWai></WaWai>,
    // Colors: <Colors></Colors>,
    // Typography: <Typography></Typography>,
    // Accordion: <Accordion></Accordion>,
    // Modal: <Modal></Modal>,
    // BottomSheet: <BottomSheet></BottomSheet>,
    // Swiper: <Swiper></Swiper>,
    // Tab: <Tab></Tab>,
    // Toast: <Toast></Toast>,
    // Tooltip: <Tooltip></Tooltip>,
    // TextField: <TextField></TextField>,
    // Checkbox: <Checkbox></Checkbox>,
    // Radio: <Radio></Radio>,
    // Select: <Select></Select>,
    // Dropdown: <Dropdown></Dropdown>,
    // Button: <Button></Button>,
    // Icon: <Icon></Icon>,
  };

  useEffect(() => {
    let path: any = location.pathname.split("/");
    path = path[path.length - 1];
    path = path.slice(0, 1).toUpperCase() + path.slice(1);
    setUrl(path);
  }, [location]);

  useEffect(() => {
    id = Object.keys(routeArray).find((key) => {
      return key === url;
    });
    values = Object.values(routeArray).find((value) => {
      return routeArray[id] === value;
    });
    setChangeUrl(values);
  }, [url]);

  return (
    <Routes>
      <Route index path="/" element={<ListIA></ListIA>}></Route>
      <Route path="guide" element={<ListGuide></ListGuide>}>
        <Route
          path="convention/:id"
          element={changeUrl ? changeUrl : null}
        ></Route>
        <Route
          path="accessibility/:id"
          element={changeUrl ? changeUrl : null}
        ></Route>
        <Route path="plan/:id" element={changeUrl ? changeUrl : null}></Route>
        <Route
          path="components/:id"
          element={changeUrl ? changeUrl : null}
        ></Route>
      </Route>
      {/* <Route path="*" element={<NoMatch></NoMatch>} /> */}
    </Routes>
  );
}

export default GuideRouter;
