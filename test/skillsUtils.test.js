import { parseSkillsFromText } from "../utils/skillsUtils"

const fs = require('fs');
var TESTSKILLDATA = JSON.parse(fs.readFileSync('test/skillstestdata.json', 'utf8'));

test('test parseSkillsFromText using small skill data', () => {
  const testLoremData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const validSkills = [{ "skill": "tempor" }, { "skill": "magna" }, { "skill": "reprehenderit" }, { "skill": "officia" }];
  const expected = ["tempor", "magna", "reprehenderit", "officia"];

  expect(parseSkillsFromText(validSkills, testLoremData)).toStrictEqual(expected);

})

test('test parseSkillsFromText using TESTSKILLDATA', () => {
  const expected = ["ITIL Certified", "Test Driven Development", "Workforce Management"];
  const text = " Skills include \ Test Driven Development for all code\  ITIL Certified \ Workforce Management of professionals\ ";

  expect(parseSkillsFromText(TESTSKILLDATA, text)).toStrictEqual(expected);

})