import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics';

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))


function allOlder(friends: Friend[]) {
    const results: string[] = [];
    for (let i = 0; i < friends.length; i++) {
        friends[i].age += 1;
        results.push(`${friends[i].name} is now ${friends[i].age}`);
    }
    return results;
}

console.log(allOlder(friends))

function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(cs);
    const newColleague = {
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
  
  function findFriends(
    friends: Friend[], 
    criterion: (friend: Friend) => boolean
): string[] {
    const result = [];
    for (let i = 0; i < friends.length; i++) {
      if (criterion(friends[i])) {
        result.push(friends[i].name);
      }
    }
    return result;
  }

  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));