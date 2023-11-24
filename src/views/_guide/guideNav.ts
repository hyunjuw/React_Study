export interface navInterface {
  title: string;
  nav: {
    name: string;
    url: string;
  }[];
}

function guideNav() {
  const guideBaseUrl = `/guide`;
  const navs: navInterface[] = [
    {
      title: "Rule",
      nav: [
        { name: "기본정책", url: `${guideBaseUrl}/convention/ruleIntro` },
        {
          name: "표준규칙",
          url: `${guideBaseUrl}/convention/ruleStandard`,
        },
        { name: "코드규칙", url: `${guideBaseUrl}/convention/ruleCode` },
        { name: "네임규칙", url: `${guideBaseUrl}/convention/ruleName` },
      ],
    },
    {
      title: "Accessibility",
      nav: [
        {
          name: "접근성 개요",
          url: `${guideBaseUrl}/accessibility/waIndex`,
        },
        { name: "WAI-ARIA", url: `${guideBaseUrl}/accessibility/waWai` },
      ],
    },
    {
      title: "General",
      nav: [
        { name: "Colors", url: `${guideBaseUrl}/plan/colors` },
        { name: "Typography", url: `${guideBaseUrl}/plan/typography` },
      ],
    },
    {
      title: "Components",
      nav: [
        {
          name: "Accordion",
          url: `${guideBaseUrl}/components/Accordion`,
        },
        { name: "Modal", url: `${guideBaseUrl}/components/Modal` },
        {
          name: "BottomSheet",
          url: `${guideBaseUrl}/components/BottomSheet`,
        },
        { name: "Swiper", url: `${guideBaseUrl}/components/Swiper` },
        { name: "Tab", url: `${guideBaseUrl}/components/Tab` },
        { name: "Toast", url: `${guideBaseUrl}/components/Toast` },
        {
          name: "Tooltip",
          url: `${guideBaseUrl}/components/Tooltip`,
        },
        {
          name: "TextField",
          url: `${guideBaseUrl}/components/Textfield`,
        },
        {
          name: "Checkbox",
          url: `${guideBaseUrl}/components/Checkbox`,
        },
        { name: "Radio", url: `${guideBaseUrl}/components/Radio` },
        { name: "Select", url: `${guideBaseUrl}/components/Select` },
        {
          name: "Dropdown",
          url: `${guideBaseUrl}/components/Dropdown`,
        },
        { name: "Button", url: `${guideBaseUrl}/components/Button` },
        { name: "Icon", url: `${guideBaseUrl}/components/Icon` },
      ],
    },
  ];
  return navs;
}

export default guideNav;
