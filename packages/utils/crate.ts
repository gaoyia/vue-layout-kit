export const prefix = "kit-";
/**
 * 根据BEM命名规则生成类名
 *
 * BEM（Block Element Modifier）是一种命名约定，用于创建清晰可维护的CSS架构
 * 这个函数根据传入的参数构建BEM类名
 *
 * @param block 块名称，BEM中的主要组件
 * @param blockSuffix 可选参数，块的后缀，用于表示块的不同状态或变体
 * @param element 可选参数，表示块内的元素
 * @param modifier 可选参数，表示元素或块的修饰符，用于表示状态或变体
 * @returns 返回根据BEM规则生成的类名
 */
export const bem = (block: string, blockSuffix?: string, element?: string, modifier?: string) => {
  let cls = `${prefix}${block}`;
  if (blockSuffix)
    cls += `-${blockSuffix}`;
  if (element)
    cls += `__${element}`;
  if (modifier)
    cls += `--${modifier}`;
  return cls;
};
bem("q");
function getRandomInt (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1, 10);
