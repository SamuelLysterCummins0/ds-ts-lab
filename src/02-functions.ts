import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics';

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))


function allOlder(friends: Friend[]): string[] {
    const results: string[] = [];
    for (let i = 0; i < friends.length; i++) {
        friends[i].age += 1;
        results.push(`${friends[i].name} is now ${friends[i].age}`);
    }
    return results;
}

console.log(allOlder(friends))

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(cs);
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: highest.contact.extension + 1
      }
    };
    cs.push(newColleague);
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));