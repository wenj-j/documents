> jasper page넘버링 로직
```
1, 4
2, 2

+

3 6
 
/
3 = (2+1)

0 = (1-1) 1 = (2-1)

1, 5, 9
3, 3, 3

+

4 8 12
/
4 = (3+1)

0 = (1-1) 1 = (2-1) 2 = (3-1)

1, 6, 11, 16
4, 4, 4, 4

+

5 10 15 20
/
5 = (4+1)

0(1-1) 1(2-1) 2(3-1) 3(4-1) 

jasper 각 메인 페이지 넘버링 계산
```
> tree 생성 로직
```
function funcTreeObject() {
    let depthIdx = 0
    let depthMax = 3
    let tree = createNode()
    tree.root = tree.root + "Parent"
    tree.child = createNode()
    funcChildPush(tree.child, depthIdx, depthMax)
    console.log(tree)
}

function funcChildPush(tree, depthIdx, depthMax){
    let childTree = tree
    if(depthIdx == depthMax) {return "end"}
    depthIdx++
    childTree.root = childTree.root + depthIdx
    childTree.child = createNode()
    funcChildPush(childTree.child, depthIdx, depthMax)
}

function createNode() {
    return {root: "rootDepth"}
}
```
