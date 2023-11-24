export interface listTableType {
  listStart: boolean;
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  depth5: string;
  depth6: string;
  type: string;
  page: string;
  url: string;
  startDate: string;
  endDate: string;
  finalDate: string;
  dueDate: string;
  status: string;
  worker: string;
  memos: string[];
}

const listTable: listTableType[][] = [
  // status:ing, done, deploy, delete
  [
    {
      listStart: true,
      depth1: "메인1",
      depth2: "메인",
      depth3: "",
      depth4: "",
      depth5: "",
      depth6: "",
      type: "M",
      page: "SCR-MN-00-0001",
      url: "/page/Page",
      startDate: "230721",
      endDate: "230721",
      finalDate: "230721",
      dueDate: "230721",
      status: "ing",
      worker: "우현주",
      memos: ["230721 텍스트 수정", "230721 텍스트 수정"],
    },
    {
      listStart: false,
      depth1: "",
      depth2: "",
      depth3: "",
      depth4: "화면",
      depth5: "",
      depth6: "",
      type: "M",
      page: "SCR-MN-00-0001",
      url: "/",
      startDate: "230721",
      endDate: "230721",
      finalDate: "230721",
      dueDate: "230721",
      status: "done",
      worker: "우현주",
      memos: ["230721 텍스트 수정"],
    },
    {
      listStart: false,
      depth1: "",
      depth2: "",
      depth3: "",
      depth4: "",
      depth5: "화면",
      depth6: "",
      type: "M",
      page: "SCR-MN-00-0001",
      url: "/",
      startDate: "230721",
      endDate: "230721",
      finalDate: "230721",
      dueDate: "230721",
      status: "delete",
      worker: "우현주",
      memos: ["230721 텍스트 수정"],
    },
    {
      listStart: false,
      depth1: "",
      depth2: "",
      depth3: "",
      depth4: "",
      depth5: "",
      depth6: "화면",
      type: "M",
      page: "SCR-MN-00-0001",
      url: "/",
      startDate: "230721",
      endDate: "230721",
      finalDate: "230721",
      dueDate: "230721",
      status: "deploy",
      worker: "우현주",
      memos: ["230721 텍스트 수정"],
    },
  ],
  [
    {
      listStart: true,
      depth1: "메인2",
      depth2: "메인",
      depth3: "",
      depth4: "",
      depth5: "",
      depth6: "",
      type: "M",
      page: "SCR-MN-00-0001",
      url: "/",
      startDate: "230721",
      endDate: "230721",
      finalDate: "230721",
      dueDate: "230721",
      status: "deploy",
      worker: "우현주",
      memos: ["230721 텍스트 수정"],
    },
    {
      listStart: false,
      depth1: "메인",
      depth2: "메인",
      depth3: "",
      depth4: "",
      depth5: "",
      depth6: "",
      type: "M",
      page: "SCR-MN-00-0001",
      url: "/",
      startDate: "230721",
      endDate: "230721",
      finalDate: "230721",
      dueDate: "230721",
      status: "deploy",
      worker: "우현주",
      memos: ["230721 텍스트 수정"],
    },
  ],
];

export default listTable;
