function renderTreeOptions(nodes, depth = 0) {
  return nodes.flatMap((node) => [
    <option key={node._id} value={node._id}>
      {`${"- ".repeat(depth)}${node.name || node.title || ""}`}
    </option>,
    ...(node.children?.length ? renderTreeOptions(node.children, depth + 1) : []),
  ]);
}

export default renderTreeOptions;

