const studentsBD = [
  {
    id: 1,
    name: "Сорокина Анастасия",
    id_group: 1,
    login: "ksk181SA",
    pass: "123456",
    shedule: {
      пн: {
        "1": {
          id: 2,
          name: "Программирование Delphi",
          groups: [1, 2, 3],
          duration: 240,
          type_of_delivery: "диф. зачет",
          id_teach: 1,
        },
        "2": {
          id: 3,
          name: "Периферийные устройства",
          duration: 360,
          type_of_delivery: "диф. зачет",
          groups: [1],
          id_teach: 1,
        },
      },
      вт: {
        "2": {
          id: 2,
          name: "Программирование Delphi",
          groups: [1, 2, 3],
          duration: 240,
          type_of_delivery: "диф. зачет",
          id_teach: 1,
        },
        "3": {
          id: 3,
          name: "Периферийные устройства",
          duration: 360,
          type_of_delivery: "диф. зачет",
          groups: [1],
          id_teach: 1,
        },
      },
      чт: {
        "2": {
          id: 2,
          name: "Программирование Delphi",
          groups: [1, 2, 3],
          duration: 240,
          type_of_delivery: "диф. зачет",
          id_teach: 1,
        },
        "4": {
          id: 3,
          name: "Периферийные устройства",
          duration: 360,
          type_of_delivery: "диф. зачет",
          groups: [1],
          id_teach: 1,
        },
      },
    },
  },
  {
    id: 2,
    name: "Турусова Карина",
    id_group: 1,
    login: "ksk181TK",
    pass: "123456",
  },
  {
    id: 3,
    name: "Овсянников Артем",
    id_group: 1,
    login: "ksk181OA",
    pass: "123456",
  },
  {
    id: 4,
    name: "Глушаченков Валерий",
    id_group: 2,
    login: "ksk181GV",
    pass: "123456",
  },
  {
    id: 5,
    name: "Клинчук Денис",
    id_group: 3,
    login: "ksk181KD",
    pass: "123456",
  },
]

export default studentsBD
