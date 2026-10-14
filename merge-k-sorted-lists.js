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


var mergeTwoLinkList = (l1, l2) => {
    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLinkList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLinkList(l1, l2.next);
        return l2;
    }
};

var partitionTOMergedList = (start, end, lists) => {
    if (start > end) {
        return null;
    }

    if (start === end) {
        return lists[start];
    }

    const mid = Math.floor((start + end) / 2);

    const l1 = partitionTOMergedList(start, mid, lists);
    const l2 = partitionTOMergedList(mid + 1, end, lists);

    return mergeTwoLinkList(l1, l2);
};

var mergeKLists = function (lists) {
    return partitionTOMergedList(0, lists.length - 1, lists);
};
