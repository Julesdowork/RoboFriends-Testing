import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jon Snow",
      username: "jsnow",
      email: "jon@gmail.com"
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});