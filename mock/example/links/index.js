module.exports = {
  newName: "validate_623453543534",
  inputData: [
    {
      id: "input",
      fields: [
        {
          type: "string",
          alias: "",
          description: "证件类型：1身份证2军官士兵证3护照 4其他",
          column: "IDENTITY_TYPE"
        },
        {
          type: "string",
          alias: "",
          description: "证件号码",
          column: "IDENTITY_CARD"
        },
        {
          type: "string",
          alias: "",
          description: "亡人姓名",
          column: "NAME"
        },
        {
          type: "int",
          alias: "",
          description: "亡人年龄",
          column: "AGE"
        },
        {
          type: "string",
          alias: "",
          description: "民族",
          column: "NATION"
        },
        {
          type: "string",
          alias: "",
          description: "火化证编号",
          column: "CERMATION_CERTIFICATE_CODE"
        },
        {
          type: "string",
          alias: "",
          description: "殡仪馆",
          column: "BYGCODE"
        },
        {
          type: "string",
          alias: "",
          description: "性别：1男性2女性3不详",
          column: "GENDER"
        },
        {
          type: "date",
          alias: "",
          description: "死亡日期",
          column: "DEATH_DATE"
        },
        {
          type: "string",
          alias: "",
          description: "死亡原因",
          column: "DEATH_REASON"
        },
        {
          type: "string",
          alias: "",
          description: "死亡类别",
          column: "DEATH_TYPE_CODE"
        },
        {
          type: "string",
          alias: "",
          description: "所属区县",
          column: "DISTRICT_CODE"
        },
        {
          type: "string",
          alias: "",
          description: "住址",
          column: "ADDRESS"
        },
        {
          type: "string",
          alias: "",
          description: "死亡证明类别",
          column: "DEATH_CERTIFICATE_TYPE_CODE"
        },
        {
          type: "string",
          alias: "",
          description: "死亡证明编号",
          column: "DEATH_CERTIFICATE_CODE"
        },
        {
          type: "string",
          alias: "",
          description: "死亡证开证单位",
          column: "DEATH_CERTIFICATE_INSTITUTION"
        },
        {
          type: "date",
          alias: "",
          description: "火化时间",
          column: "FILLOUT_DATE"
        },
        {
          type: "date",
          alias: "",
          description: "创建时间",
          column: "SYN_IN_DATE"
        },
        {
          type: "int",
          alias: "",
          description: "使用标志",
          column: "USE_FLAG"
        },
        {
          type: "string",
          alias: "",
          description: "死亡库更新状态2205已交换2206未交换默认是2206",
          column: "CHANGE_FLAG"
        },
        {
          type: "int",
          alias: "",
          description: "数据交换自增ID",
          column: "DTCID_BJDB_REGION"
        },
        {
          type: "string",
          alias: "",
          description: "数据来源方向",
          column: "DATAFROM"
        },
        {
          type: "date",
          alias: "",
          description: "数据最后处理时间",
          column: "DTC_ARRIVEDATE"
        },
        {
          type: "date",
          alias: "",
          description: "更新时间",
          column: "SYN_DATE"
        },
        {
          type: "date",
          alias: "",
          description: "交换时间",
          column: "EXT_DATE"
        },
        {
          type: "int",
          alias: "",
          description: "交换状态",
          column: "EXT_STATE"
        },
        {
          type: "string",
          alias: "",
          description: "数据操作标志",
          column: "DML_FLAG"
        },
        {
          type: "int",
          alias: "",
          description: "主键",
          column: "ID"
        }
      ]
    }
  ],
  nodeSetTab: [
    {
      title: "输入（source_1）",
      name: "input",
      icon: "fa fa-sign-in"
    },
    {
      title: "参数",
      name: "parameter",
      icon: "fa fa-gear"
    },
    {
      title: "ok",
      name: "ok",
      icon: "fa fa-sign-out"
    },
    {
      title: "error",
      name: "error",
      icon: "fa fa-sign-out"
    }
  ],
  thisNodeData: {
    id: "validate_6",
    name: "validate_6",
    type: "validate",
    x: 449,
    y: 271,
    otherConfigurations: {
      detailColumn: "errorInfo",
      validationRules: [
        {
          name: "证件类型不能为空",
          expression: "IDENTITY_TYPE != null"
        },
        {
          name: "证件号码不能为空",
          expression: "IDENTITY_CARD !=null"
        }
      ],
      action: "save",
      sessionCache: "",
      interceptor: "",
      showDetails: "false"
    },
    inputConfigurations: [
      {
        id: "input",
        fields: [
          {
            type: "string",
            alias: "",
            description: "证件类型：1身份证2军官士兵证3护照 4其他",
            column: "IDENTITY_TYPE"
          },
          {
            type: "string",
            alias: "",
            description: "证件号码",
            column: "IDENTITY_CARD"
          },
          {
            type: "string",
            alias: "",
            description: "亡人姓名",
            column: "NAME"
          },
          {
            type: "int",
            alias: "",
            description: "亡人年龄",
            column: "AGE"
          },
          {
            type: "string",
            alias: "",
            description: "民族",
            column: "NATION"
          },
          {
            type: "string",
            alias: "",
            description: "火化证编号",
            column: "CERMATION_CERTIFICATE_CODE"
          },
          {
            type: "string",
            alias: "",
            description: "殡仪馆",
            column: "BYGCODE"
          },
          {
            type: "string",
            alias: "",
            description: "性别：1男性2女性3不详",
            column: "GENDER"
          },
          {
            type: "date",
            alias: "",
            description: "死亡日期",
            column: "DEATH_DATE"
          },
          {
            type: "string",
            alias: "",
            description: "死亡原因",
            column: "DEATH_REASON"
          },
          {
            type: "string",
            alias: "",
            description: "死亡类别",
            column: "DEATH_TYPE_CODE"
          },
          {
            type: "string",
            alias: "",
            description: "所属区县",
            column: "DISTRICT_CODE"
          },
          {
            type: "string",
            alias: "",
            description: "住址",
            column: "ADDRESS"
          },
          {
            type: "string",
            alias: "",
            description: "死亡证明类别",
            column: "DEATH_CERTIFICATE_TYPE_CODE"
          },
          {
            type: "string",
            alias: "",
            description: "死亡证明编号",
            column: "DEATH_CERTIFICATE_CODE"
          },
          {
            type: "string",
            alias: "",
            description: "死亡证开证单位",
            column: "DEATH_CERTIFICATE_INSTITUTION"
          },
          {
            type: "date",
            alias: "",
            description: "火化时间",
            column: "FILLOUT_DATE"
          },
          {
            type: "date",
            alias: "",
            description: "创建时间",
            column: "SYN_IN_DATE"
          },
          {
            type: "int",
            alias: "",
            description: "使用标志",
            column: "USE_FLAG"
          },
          {
            type: "string",
            alias: "",
            description: "死亡库更新状态2205已交换2206未交换默认是2206",
            column: "CHANGE_FLAG"
          },
          {
            type: "int",
            alias: "",
            description: "数据交换自增ID",
            column: "DTCID_BJDB_REGION"
          },
          {
            type: "string",
            alias: "",
            description: "数据来源方向",
            column: "DATAFROM"
          },
          {
            type: "date",
            alias: "",
            description: "数据最后处理时间",
            column: "DTC_ARRIVEDATE"
          },
          {
            type: "date",
            alias: "",
            description: "更新时间",
            column: "SYN_DATE"
          },
          {
            type: "date",
            alias: "",
            description: "交换时间",
            column: "EXT_DATE"
          },
          {
            type: "int",
            alias: "",
            description: "交换状态",
            column: "EXT_STATE"
          },
          {
            type: "string",
            alias: "",
            description: "数据操作标志",
            column: "DML_FLAG"
          },
          {
            type: "int",
            alias: "",
            description: "主键",
            column: "ID"
          }
        ]
      }
    ],
    outputConfigurations: [
      {
        id: "ok",
        fields: [
          {
            column: "IDENTITY_TYPE",
            alias: ""
          },
          {
            column: "IDENTITY_CARD",
            alias: ""
          },
          {
            column: "NAME",
            alias: ""
          },
          {
            column: "AGE",
            alias: ""
          },
          {
            column: "NATION",
            alias: ""
          },
          {
            column: "CERMATION_CERTIFICATE_CODE",
            alias: ""
          },
          {
            column: "BYGCODE",
            alias: ""
          },
          {
            column: "GENDER",
            alias: ""
          },
          {
            column: "DEATH_DATE",
            alias: ""
          },
          {
            column: "DEATH_REASON",
            alias: ""
          },
          {
            column: "DEATH_TYPE_CODE",
            alias: ""
          },
          {
            column: "DISTRICT_CODE",
            alias: ""
          },
          {
            column: "ADDRESS",
            alias: ""
          },
          {
            column: "DEATH_CERTIFICATE_TYPE_CODE",
            alias: ""
          },
          {
            column: "DEATH_CERTIFICATE_CODE",
            alias: ""
          },
          {
            column: "DEATH_CERTIFICATE_INSTITUTION",
            alias: ""
          },
          {
            column: "FILLOUT_DATE",
            alias: ""
          },
          {
            column: "SYN_IN_DATE",
            alias: ""
          },
          {
            column: "USE_FLAG",
            alias: ""
          },
          {
            column: "CHANGE_FLAG",
            alias: ""
          },
          {
            column: "DTCID_BJDB_REGION",
            alias: ""
          },
          {
            column: "DATAFROM",
            alias: ""
          },
          {
            column: "DTC_ARRIVEDATE",
            alias: ""
          },
          {
            column: "SYN_DATE",
            alias: ""
          },
          {
            column: "EXT_DATE",
            alias: ""
          },
          {
            column: "EXT_STATE",
            alias: ""
          },
          {
            column: "DML_FLAG",
            alias: ""
          },
          {
            column: "ID",
            alias: ""
          }
        ]
      },
      {
        id: "error",
        fields: [
          {
            column: "IDENTITY_TYPE",
            alias: ""
          },
          {
            column: "IDENTITY_CARD",
            alias: ""
          },
          {
            column: "NAME",
            alias: ""
          },
          {
            column: "AGE",
            alias: ""
          },
          {
            column: "NATION",
            alias: ""
          },
          {
            column: "CERMATION_CERTIFICATE_CODE",
            alias: ""
          },
          {
            column: "BYGCODE",
            alias: ""
          },
          {
            column: "GENDER",
            alias: ""
          },
          {
            column: "DEATH_DATE",
            alias: ""
          },
          {
            column: "DEATH_REASON",
            alias: ""
          },
          {
            column: "DEATH_TYPE_CODE",
            alias: ""
          },
          {
            column: "DISTRICT_CODE",
            alias: ""
          },
          {
            column: "ADDRESS",
            alias: ""
          },
          {
            column: "DEATH_CERTIFICATE_TYPE_CODE",
            alias: ""
          },
          {
            column: "DEATH_CERTIFICATE_CODE",
            alias: ""
          },
          {
            column: "DEATH_CERTIFICATE_INSTITUTION",
            alias: ""
          },
          {
            column: "FILLOUT_DATE",
            alias: ""
          },
          {
            column: "SYN_IN_DATE",
            alias: ""
          },
          {
            column: "USE_FLAG",
            alias: ""
          },
          {
            column: "CHANGE_FLAG",
            alias: ""
          },
          {
            column: "DTCID_BJDB_REGION",
            alias: ""
          },
          {
            column: "DATAFROM",
            alias: ""
          },
          {
            column: "DTC_ARRIVEDATE",
            alias: ""
          },
          {
            column: "SYN_DATE",
            alias: ""
          },
          {
            column: "EXT_DATE",
            alias: ""
          },
          {
            column: "EXT_STATE",
            alias: ""
          },
          {
            column: "DML_FLAG",
            alias: ""
          },
          {
            column: "ID",
            alias: ""
          }
        ]
      }
    ]
  },
  flowData: {
    id: "31672c08-7d80-429d-adcc-004295329e5b",
    name: "  过滤证件号码和证件类型为空的数据",
    flowType: "dataflow",
    steps: [
      {
        id: "source_1",
        name: "source_1",
        type: "source",
        x: 144,
        y: 65,
        otherConfigurations: {
          schema: "BJBZ_HUOHUA_INFO_火化人口数据",
          schemaId: "198faba9-148c-409e-9c1a-103c921d83a2",
          sessionCache: "",
          datasetId: "687ef45e-341f-4e64-9911-d735e6254959",
          interceptor: "",
          dataset: "BJBZ_HUOHUA_INFO_火化人口数据"
        },
        outputConfigurations: [
          {
            id: "output",
            fields: [
              {
                type: "string",
                alias: "",
                description: "证件类型：1身份证2军官士兵证3护照 4其他",
                column: "IDENTITY_TYPE"
              },
              {
                type: "string",
                alias: "",
                description: "证件号码",
                column: "IDENTITY_CARD"
              },
              {
                type: "string",
                alias: "",
                description: "亡人姓名",
                column: "NAME"
              },
              {
                type: "int",
                alias: "",
                description: "亡人年龄",
                column: "AGE"
              },
              {
                type: "string",
                alias: "",
                description: "民族",
                column: "NATION"
              },
              {
                type: "string",
                alias: "",
                description: "火化证编号",
                column: "CERMATION_CERTIFICATE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "殡仪馆",
                column: "BYGCODE"
              },
              {
                type: "string",
                alias: "",
                description: "性别：1男性2女性3不详",
                column: "GENDER"
              },
              {
                type: "date",
                alias: "",
                description: "死亡日期",
                column: "DEATH_DATE"
              },
              {
                type: "string",
                alias: "",
                description: "死亡原因",
                column: "DEATH_REASON"
              },
              {
                type: "string",
                alias: "",
                description: "死亡类别",
                column: "DEATH_TYPE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "所属区县",
                column: "DISTRICT_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "住址",
                column: "ADDRESS"
              },
              {
                type: "string",
                alias: "",
                description: "死亡证明类别",
                column: "DEATH_CERTIFICATE_TYPE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "死亡证明编号",
                column: "DEATH_CERTIFICATE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "死亡证开证单位",
                column: "DEATH_CERTIFICATE_INSTITUTION"
              },
              {
                type: "date",
                alias: "",
                description: "火化时间",
                column: "FILLOUT_DATE"
              },
              {
                type: "date",
                alias: "",
                description: "创建时间",
                column: "SYN_IN_DATE"
              },
              {
                type: "int",
                alias: "",
                description: "使用标志",
                column: "USE_FLAG"
              },
              {
                type: "string",
                alias: "",
                description: "死亡库更新状态2205已交换2206未交换默认是2206",
                column: "CHANGE_FLAG"
              },
              {
                type: "int",
                alias: "",
                description: "数据交换自增ID",
                column: "DTCID_BJDB_REGION"
              },
              {
                type: "string",
                alias: "",
                description: "数据来源方向",
                column: "DATAFROM"
              },
              {
                type: "date",
                alias: "",
                description: "数据最后处理时间",
                column: "DTC_ARRIVEDATE"
              },
              {
                type: "date",
                alias: "",
                description: "更新时间",
                column: "SYN_DATE"
              },
              {
                type: "date",
                alias: "",
                description: "交换时间",
                column: "EXT_DATE"
              },
              {
                type: "int",
                alias: "",
                description: "交换状态",
                column: "EXT_STATE"
              },
              {
                type: "string",
                alias: "",
                description: "数据操作标志",
                column: "DML_FLAG"
              },
              {
                type: "int",
                alias: "",
                description: "主键",
                column: "ID"
              }
            ]
          }
        ]
      },
      {
        id: "validate_6",
        name: "validate_6",
        type: "validate",
        x: 449,
        y: 271,
        otherConfigurations: {
          detailColumn: "errorInfo",
          validationRules: [
            {
              name: "证件类型不能为空",
              expression: "IDENTITY_TYPE != null"
            },
            {
              name: "证件号码不能为空",
              expression: "IDENTITY_CARD !=null"
            }
          ],
          action: "save",
          sessionCache: "",
          interceptor: "",
          showDetails: "false"
        },
        inputConfigurations: [
          {
            id: "input",
            fields: [
              {
                type: "string",
                alias: "",
                description: "证件类型：1身份证2军官士兵证3护照 4其他",
                column: "IDENTITY_TYPE"
              },
              {
                type: "string",
                alias: "",
                description: "证件号码",
                column: "IDENTITY_CARD"
              },
              {
                type: "string",
                alias: "",
                description: "亡人姓名",
                column: "NAME"
              },
              {
                type: "int",
                alias: "",
                description: "亡人年龄",
                column: "AGE"
              },
              {
                type: "string",
                alias: "",
                description: "民族",
                column: "NATION"
              },
              {
                type: "string",
                alias: "",
                description: "火化证编号",
                column: "CERMATION_CERTIFICATE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "殡仪馆",
                column: "BYGCODE"
              },
              {
                type: "string",
                alias: "",
                description: "性别：1男性2女性3不详",
                column: "GENDER"
              },
              {
                type: "date",
                alias: "",
                description: "死亡日期",
                column: "DEATH_DATE"
              },
              {
                type: "string",
                alias: "",
                description: "死亡原因",
                column: "DEATH_REASON"
              },
              {
                type: "string",
                alias: "",
                description: "死亡类别",
                column: "DEATH_TYPE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "所属区县",
                column: "DISTRICT_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "住址",
                column: "ADDRESS"
              },
              {
                type: "string",
                alias: "",
                description: "死亡证明类别",
                column: "DEATH_CERTIFICATE_TYPE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "死亡证明编号",
                column: "DEATH_CERTIFICATE_CODE"
              },
              {
                type: "string",
                alias: "",
                description: "死亡证开证单位",
                column: "DEATH_CERTIFICATE_INSTITUTION"
              },
              {
                type: "date",
                alias: "",
                description: "火化时间",
                column: "FILLOUT_DATE"
              },
              {
                type: "date",
                alias: "",
                description: "创建时间",
                column: "SYN_IN_DATE"
              },
              {
                type: "int",
                alias: "",
                description: "使用标志",
                column: "USE_FLAG"
              },
              {
                type: "string",
                alias: "",
                description: "死亡库更新状态2205已交换2206未交换默认是2206",
                column: "CHANGE_FLAG"
              },
              {
                type: "int",
                alias: "",
                description: "数据交换自增ID",
                column: "DTCID_BJDB_REGION"
              },
              {
                type: "string",
                alias: "",
                description: "数据来源方向",
                column: "DATAFROM"
              },
              {
                type: "date",
                alias: "",
                description: "数据最后处理时间",
                column: "DTC_ARRIVEDATE"
              },
              {
                type: "date",
                alias: "",
                description: "更新时间",
                column: "SYN_DATE"
              },
              {
                type: "date",
                alias: "",
                description: "交换时间",
                column: "EXT_DATE"
              },
              {
                type: "int",
                alias: "",
                description: "交换状态",
                column: "EXT_STATE"
              },
              {
                type: "string",
                alias: "",
                description: "数据操作标志",
                column: "DML_FLAG"
              },
              {
                type: "int",
                alias: "",
                description: "主键",
                column: "ID"
              }
            ]
          }
        ],
        outputConfigurations: [
          {
            id: "ok",
            fields: [
              {
                column: "IDENTITY_TYPE",
                alias: ""
              },
              {
                column: "IDENTITY_CARD",
                alias: ""
              },
              {
                column: "NAME",
                alias: ""
              },
              {
                column: "AGE",
                alias: ""
              },
              {
                column: "NATION",
                alias: ""
              },
              {
                column: "CERMATION_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "BYGCODE",
                alias: ""
              },
              {
                column: "GENDER",
                alias: ""
              },
              {
                column: "DEATH_DATE",
                alias: ""
              },
              {
                column: "DEATH_REASON",
                alias: ""
              },
              {
                column: "DEATH_TYPE_CODE",
                alias: ""
              },
              {
                column: "DISTRICT_CODE",
                alias: ""
              },
              {
                column: "ADDRESS",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_TYPE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_INSTITUTION",
                alias: ""
              },
              {
                column: "FILLOUT_DATE",
                alias: ""
              },
              {
                column: "SYN_IN_DATE",
                alias: ""
              },
              {
                column: "USE_FLAG",
                alias: ""
              },
              {
                column: "CHANGE_FLAG",
                alias: ""
              },
              {
                column: "DTCID_BJDB_REGION",
                alias: ""
              },
              {
                column: "DATAFROM",
                alias: ""
              },
              {
                column: "DTC_ARRIVEDATE",
                alias: ""
              },
              {
                column: "SYN_DATE",
                alias: ""
              },
              {
                column: "EXT_DATE",
                alias: ""
              },
              {
                column: "EXT_STATE",
                alias: ""
              },
              {
                column: "DML_FLAG",
                alias: ""
              },
              {
                column: "ID",
                alias: ""
              }
            ]
          },
          {
            id: "error",
            fields: [
              {
                column: "IDENTITY_TYPE",
                alias: ""
              },
              {
                column: "IDENTITY_CARD",
                alias: ""
              },
              {
                column: "NAME",
                alias: ""
              },
              {
                column: "AGE",
                alias: ""
              },
              {
                column: "NATION",
                alias: ""
              },
              {
                column: "CERMATION_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "BYGCODE",
                alias: ""
              },
              {
                column: "GENDER",
                alias: ""
              },
              {
                column: "DEATH_DATE",
                alias: ""
              },
              {
                column: "DEATH_REASON",
                alias: ""
              },
              {
                column: "DEATH_TYPE_CODE",
                alias: ""
              },
              {
                column: "DISTRICT_CODE",
                alias: ""
              },
              {
                column: "ADDRESS",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_TYPE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_INSTITUTION",
                alias: ""
              },
              {
                column: "FILLOUT_DATE",
                alias: ""
              },
              {
                column: "SYN_IN_DATE",
                alias: ""
              },
              {
                column: "USE_FLAG",
                alias: ""
              },
              {
                column: "CHANGE_FLAG",
                alias: ""
              },
              {
                column: "DTCID_BJDB_REGION",
                alias: ""
              },
              {
                column: "DATAFROM",
                alias: ""
              },
              {
                column: "DTC_ARRIVEDATE",
                alias: ""
              },
              {
                column: "SYN_DATE",
                alias: ""
              },
              {
                column: "EXT_DATE",
                alias: ""
              },
              {
                column: "EXT_STATE",
                alias: ""
              },
              {
                column: "DML_FLAG",
                alias: ""
              },
              {
                column: "ID",
                alias: ""
              }
            ]
          }
        ]
      },
      {
        id: "sink_8",
        name: "sink_8",
        type: "sink",
        x: 873,
        y: 68,
        otherConfigurations: {
          schema: "BJBZ_HUOHUA_INFO_火化人口数据",
          quoteChar: '"',
          escapeChar: "\\",
          sliceTimeColumn: "",
          format: "csv",
          description: "",
          sessionCache: "",
          interceptor: "",
          maxFileSize: "",
          type: "HDFS",
          maxFileNumber: "",
          nullValue: "",
          separator: ",",
          expiredTime: "0",
          mode: "overwrite",
          path: "/test/mingzheng/out/huohua_name",
          schemaId: "198faba9-148c-409e-9c1a-103c921d83a2",
          datasetId: "686ccb15-dc93-4aab-b4e1-8b27d7c647fe",
          dataset: "火化数据第一次过滤",
          sliceType: "H",
          specifiedStringColumnTypes: []
        },
        inputConfigurations: [
          {
            id: "input",
            fields: [
              {
                column: "IDENTITY_TYPE",
                alias: ""
              },
              {
                column: "IDENTITY_CARD",
                alias: ""
              },
              {
                column: "NAME",
                alias: ""
              },
              {
                column: "AGE",
                alias: ""
              },
              {
                column: "NATION",
                alias: ""
              },
              {
                column: "CERMATION_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "BYGCODE",
                alias: ""
              },
              {
                column: "GENDER",
                alias: ""
              },
              {
                column: "DEATH_DATE",
                alias: ""
              },
              {
                column: "DEATH_REASON",
                alias: ""
              },
              {
                column: "DEATH_TYPE_CODE",
                alias: ""
              },
              {
                column: "DISTRICT_CODE",
                alias: ""
              },
              {
                column: "ADDRESS",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_TYPE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_INSTITUTION",
                alias: ""
              },
              {
                column: "FILLOUT_DATE",
                alias: ""
              },
              {
                column: "SYN_IN_DATE",
                alias: ""
              },
              {
                column: "USE_FLAG",
                alias: ""
              },
              {
                column: "CHANGE_FLAG",
                alias: ""
              },
              {
                column: "DTCID_BJDB_REGION",
                alias: ""
              },
              {
                column: "DATAFROM",
                alias: ""
              },
              {
                column: "DTC_ARRIVEDATE",
                alias: ""
              },
              {
                column: "SYN_DATE",
                alias: ""
              },
              {
                column: "EXT_DATE",
                alias: ""
              },
              {
                column: "EXT_STATE",
                alias: ""
              },
              {
                column: "DML_FLAG",
                alias: ""
              },
              {
                column: "ID",
                alias: ""
              }
            ]
          }
        ],
        outputConfigurations: [
          {
            id: "output",
            fields: []
          }
        ]
      },
      {
        id: "sink_9",
        name: "sink_9",
        type: "sink",
        x: 1036,
        y: 319,
        otherConfigurations: {
          schema: "BJBZ_HUOHUA_INFO_火化人口数据",
          quoteChar: '"',
          escapeChar: "\\",
          sliceTimeColumn: "",
          format: "csv",
          description: "",
          sessionCache: "",
          interceptor: "",
          maxFileSize: "",
          type: "HDFS",
          maxFileNumber: "",
          nullValue: "",
          separator: ",",
          expiredTime: "0",
          mode: "overwrite",
          path: "/test/mingzheng/out/huohua_wuxiao",
          schemaId: "198faba9-148c-409e-9c1a-103c921d83a2",
          datasetId: "c8353d86-5a8b-41e6-a132-fb3f1d67399f",
          dataset: "huohua_wuxiao",
          sliceType: "H",
          specifiedStringColumnTypes: []
        },
        inputConfigurations: [
          {
            id: "input",
            fields: [
              {
                column: "IDENTITY_TYPE",
                alias: ""
              },
              {
                column: "IDENTITY_CARD",
                alias: ""
              },
              {
                column: "NAME",
                alias: ""
              },
              {
                column: "AGE",
                alias: ""
              },
              {
                column: "NATION",
                alias: ""
              },
              {
                column: "CERMATION_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "BYGCODE",
                alias: ""
              },
              {
                column: "GENDER",
                alias: ""
              },
              {
                column: "DEATH_DATE",
                alias: ""
              },
              {
                column: "DEATH_REASON",
                alias: ""
              },
              {
                column: "DEATH_TYPE_CODE",
                alias: ""
              },
              {
                column: "DISTRICT_CODE",
                alias: ""
              },
              {
                column: "ADDRESS",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_TYPE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_CODE",
                alias: ""
              },
              {
                column: "DEATH_CERTIFICATE_INSTITUTION",
                alias: ""
              },
              {
                column: "FILLOUT_DATE",
                alias: ""
              },
              {
                column: "SYN_IN_DATE",
                alias: ""
              },
              {
                column: "USE_FLAG",
                alias: ""
              },
              {
                column: "CHANGE_FLAG",
                alias: ""
              },
              {
                column: "DTCID_BJDB_REGION",
                alias: ""
              },
              {
                column: "DATAFROM",
                alias: ""
              },
              {
                column: "DTC_ARRIVEDATE",
                alias: ""
              },
              {
                column: "SYN_DATE",
                alias: ""
              },
              {
                column: "EXT_DATE",
                alias: ""
              },
              {
                column: "EXT_STATE",
                alias: ""
              },
              {
                column: "DML_FLAG",
                alias: ""
              },
              {
                column: "ID",
                alias: ""
              }
            ]
          }
        ],
        outputConfigurations: [
          {
            id: "output",
            fields: []
          }
        ]
      },
      {
        id: "d4b05991-b692-4d93-bafe-c65a86e22de6",
        name: "CUSTOME-STEPS-030",
        type: "define",
        x: 421,
        y: 520,
        otherConfigurations: {},
        inputConfigurations: [],
        outputConfigurations: []
      }
    ],
    links: [
      {
        name: "con_64",
        source: "source_1",
        sourceOutput: "output",
        target: "validate_6",
        targetInput: "input",
        input: "input"
      },
      {
        name: "con_65",
        source: "validate_6",
        sourceOutput: "ok",
        target: "sink_8",
        targetInput: "input",
        input: "input"
      },
      {
        name: "con_66",
        source: "validate_6",
        sourceOutput: "error",
        target: "sink_9",
        targetInput: "input",
        input: "input"
      }
    ],
    inputs: [],
    outputs: [],
    oid: "$null",
    creator: "admin",
    createTime: 1547018598000,
    lastModifier: "admin",
    lastModifiedTime: 1565265595000,
    owner: "2059750c-a300-4b64-84a6-e8b086dbfd42",
    version: 8,
    enabled: 1,
    moduleVersion: 0,
    tenant: {
      id: "2d7ad891-41c5-4fba-9ff2-03aef3c729e5",
      name: "default",
      creator: "root",
      createTime: 1532942318000,
      lastModifier: "root",
      lastModifiedTime: 1544078372000,
      owner: "f8aff341-9303-4135-b393-1d322e4638e2",
      version: 0,
      moduleVersion: 0,
      enabled: 1,
      resourceQueues: ["default"],
      hdfsSpaceQuota: 0,
      zid: "",
      expiredPeriod: 0
    },
    tableName: "merce_flow",
    isHide: 0,
    parameters: [],
    expiredPeriod: 0
  },
  nodeSetVisible: true,
  dbStatus: "1",
  btnStatus: true,
};
