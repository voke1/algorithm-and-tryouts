var canFinish = function (numCourses, prerequisites) {
  console.log({ numCourses, prerequisites });
  let degree = {},
    graph = {};

  // build indegree
  for (let i = 0; i < numCourses; i++) {
    degree[i] = 0;
  }

  // build degree v2
  //   for (let i = 0; i < prerequisites.length; i++) {
  //     let currVal = prerequisites[i][0];
  //     let nexVal = prerequisites[i][1]
  //     console.log({ currVal, i });
  //     if (!degree.has(currVal)) {
  //       degree.set(currVal, 0);
  //       if(!degree.has(nexVal)){
  //         degree.set(nexVal, 0)
  //       }
  //     }
  //   }

  console.log({ degree });

  //adjacency List
  for (let [course, prereq] of prerequisites) {
    console.log({ prereq });
    graph[prereq] = (graph[prereq] || []).concat(course);
    degree[course] = (degree[course] || 0) + 1;
  }

  console.log({ graph });
  console.log({ degree });

  // topological sort
  let stack = [],
    result = []; //sorted queue
  for (let [key, value] of Object.entries(degree)) {
    console.log("got here");
    console.log({ key, value });
    if (value === 0) {
      stack.push(key);
    }
  }

  console.log({ stack });

  while (stack.length !== 0) {
    let key = stack.pop();
    result.push(key);
    if (graph[key]) {
      console.log({ graphkey: graph[key] });
      for (let neighbor of graph[key]) {
        console.log({ neigDegree: degree[neighbor] });
        degree[neighbor]--;
        if (degree[neighbor] === 0) {
          stack.push(neighbor);
        }
      }
    }
  }

  console.log({ result });

  console.log(result.length === numCourses);
};

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 1],
    [3, 1],
  ]);

canFinish(numCourses, prerequisites);
