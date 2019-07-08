// cannot make it work in TS at the moment

import { configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
