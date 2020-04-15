//1a) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18, find 8
//11
//5


//1b) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18, find 16
//11
//15
//17
//null

//Find a book

const books = [
    { dewy: '003.445', title: 'a' },
    { dewy: '003.447', title: 'b' },
    { dewy: '003.449', title: 'c' },
    { dewy: '003.449', title: 'd' },
    { dewy: '003.450', title: 'e' },

];

function deweySearching(dewey, title, start, end) {
    let start = start === undefined ? 0: start
    let end = end === undefined ? dewey.length : end;

    if (start > end) {
        return -1
    }

    const index = Math.floor((start+end)/2)
    const item = dewey[index]

    for(let i = 0; i < dewey.length; i++) {
        if(dewey[i] === title) {
            return `found book at ${i}`
        } else {
            return 'book not found'
        }
    }
}
// in order restructuring
//                  35
//            25          89
//         15     27     79       91
//      14  19                 90

//post order
//14, 19, 15, 27, 25, 79, 90, 91, 89, 35

// post order traversal
// 5, 7, 6, 9, 11, 10, 8
//              8
//            6     10
//        5     7    9    11
//pre order:
//8, 6, 5, 7 10, 9, 11

// different tree traversals

function preOrder(bst) {
    console.log(bst.key);

    if(bst.left) {
        preOrder(bst.left)
    } if(bst.right) {
        preOrder(bst.right)
    }
}

function inOrder(bst) {
    if(bst.left) {
        inOrder(bst.left)
    }
    console.log(bst.key)
    if(bst.right) {
        inOrder(bst.right)
    }
}

function postOrder(bst) {
    if(bst.left) {
        postOrder(bst.left)
    }
    if(bst.right) {
        postOrder(bst.right)
    }
    console.log(bst.key)
}

function nextOfficer() {
    let BST = new BinarySearchTree();
    BST.insert(5, 'Captain Picard')
    BST.insert(3, 'Commander Riker')
    BST.insert(6, 'Commander Data');
    BST.insert(8, 'Lt. Cmdr. Crusher');
    BST.insert(7, 'Lieutenant Selar');
    BST.insert(2, 'Lt. Cmdr. Worf');
    BST.insert(4, 'Lt. Cmdr. LaForge');
    BST.insert(1, 'Lt. security-officer');
}

function nextCmdOfficer(tree, result=[]) {
    const queue = new Queue();
    queue.enqueue(tree);

    while(queue.first !==null) {
        const node = queue.dequeue()
        result.push(node.value)

        if(node.left){
            queue.enqueue(node.left)
        }
        if(node.right) {
            queue.enqueue(node.right)
        }
    }
    result.forEach(officer => console.log(officer))
}

function maxProfit(array) {

    let minVal = array[0];
    let indexMin = 0;
    for (let i = 0; i < array.length; i++) {
      if(array[i] < minVal) {
        minVal = array[i];
        indexMin = i;
      }
    }
    let maxVal = array[indexMin];
    let maxIndex = 0
    for (let i = indexMin; i < array.lengthj; i++) {
      if(maxVal < array[i]) {
        maxVal = array[i];
        maxIndex = i
      }
    }
    return `Buy on ${indexMin + 1} day at ${minVal} and sell on ${maxIndex + 1} day at ${maxVal}`;
  }