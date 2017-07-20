// Problem: https://open.kattis.com/problems/ceiling

let line;
let passedTheFirstLine = false;
let bstrees = []; // this is where I keep all the bs trees from the input
let differentTreeShapes = []; // this is where I keep all individual tree shapes; this is a stringified version of the object, like a hash, but with the values replaced with a random letter ('v'), so that different values in trees with the same shape are not duped

while (line = readline()) {
  if (!passedTheFirstLine) {
    passedTheFirstLine = true;
    continue;
  }

  line = line.split(/\s/);

  bstrees.push(generateNode(null));
  for (let i = 0; i < line.length; i += 1) {
    pushToTree(parseInt(line[i]), bstrees[bstrees.length - 1]);
  }

  // keep track of the signature of each shape and count them at the end
  let shapeSignature = JSON.stringify(bstrees[bstrees.length - 1]).replace(/[0-9]+/g, 'v');
  if (differentTreeShapes.indexOf(shapeSignature) === -1) {
    differentTreeShapes.push(shapeSignature);
  }
}

print(differentTreeShapes.length);

function pushToTree(value, crtNode) {
  if (!crtNode.value) {
    crtNode.value = value;
    crtNode.left = generateNode(null);
    crtNode.right = generateNode(null);
    return;
  }

  pushToTree(value, value <= crtNode.value ? crtNode.left : crtNode.right);
}

function generateNode(value) {
  return {
    value: value,
    left: null,
    right: null
  };
}
