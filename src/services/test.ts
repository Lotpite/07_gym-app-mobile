import axios from "axios";

type ValueOf<T> = T[keyof T];

interface IApiPath {
  a: string;
  b: number;
}

const newObj = {
  a: true,
  b: 32,
};

type Values = ValueOf<typeof newObj>; // retrun [1 | name]

const getTreeData = () => {
  Object.keys(newObj).forEach((method) => {
    console.log(method as keyof typeof newObj);
  });
};

getTreeData();
