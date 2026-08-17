// Iterate through a linked list and print the values of each node
let l1_node1 = { val : 1, next: null };
let l1_node2 = { val : 2, next: null };
let l1_node3 = { val : 4, next: null };

l1_node1.next = l1_node2;
l1_node2.next = l1_node3;

let l1 = l1_node1;;

let l2_node1 = { val : 1, next: null };
let l2_node2 = { val : 3, next: null };
let l2_node3 = { val : 4, next: null };

l2_node1.next = l2_node2;
l2_node2.next = l2_node3;

let l2 = l2_node1;

var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

console.log("Linked List 1:", l1);
console.log("Linked List 2:", l2);
console.log("After Merged", mergeTwoLists(l1, l2));