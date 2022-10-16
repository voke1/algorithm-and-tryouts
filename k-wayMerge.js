/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeTwoList = (list1, list2) => {
  let dummy = new ListNode(0);
  let current = dummy;

  if (!list1 && !list2) {
    return list1;
  }

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
};

var mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }

  while (lists.length > 1) {
    let firstItem = lists.shift();
    let secondItem = lists.shift();

    let mergedLists = mergeTwoList(firstItem, secondItem);
    lists.push(mergedLists);
  }

  return lists[0];
};
