/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let current = new ListNode(0);
    let head = current;

    while (l1 !== null || l2 !== null || carry > 0) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        const currentDigit = Math.floor(sum % 10);
        carry = Math.floor(sum / 10);
        // New node creation
        const newNode = {
            val: currentDigit,
            next: null
        };

        current.next = newNode;
        current = newNode;

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    return head.next;

};
