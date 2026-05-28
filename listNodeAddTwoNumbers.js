function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function (l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let carry = 0;
    let restatingNode = null;
    let endingNode = null
    while (current1 != null || current2 != null || carry > 0) {
        let x = current1.val ?? 0;
        let y = current2.val ?? 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        let currentDigit = Math.floor(sum % 10);

        if (restatingNode == null) {
            let firstNode = new ListNode(currentDigit);
            restatingNode = firstNode;
            endingNode = firstNode;
        } else {
            endingNode.next = new ListNode(currentDigit);
            endingNode = endingNode.next;
        }

        if (current1) {
            current1 = current1.next;
        }

        if (current2) {
            current2 = current2.next;
        }
    }

    return restatingNode;
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(8)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));