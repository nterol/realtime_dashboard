export type Package = {
  id: string;
  create_time: string;
  organization: string;
  type: string;
  payload: {
    reference: string;
    operator: string;
    subtype: string;
    short: string;
    description: string;
  };
};

export type StateType = {
  server: {
    status: string;
  };
  packages: {
    [k: string]: Array<Package>;
  };
};
