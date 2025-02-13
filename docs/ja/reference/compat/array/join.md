# join

::: info
この関数は互換性のために `es-toolkit/compat` からのみインポートできます。代替可能なネイティブ JavaScript API があるか、まだ十分に最適化されていないためです。

`es-toolkit/compat` からこの関数をインポートすると、[lodash と完全に同じように動作](../../../compatibility.md)します。
:::

配列の要素を文字列に結合します。

## インターフェース

```typescript
function join<T>(array: T[], separator?: string): string;
```

### パラメータ

- `array` (`T[]`) - 結合する配列です。

::: info `array` は `ArrayLike<T>` であるか、`null` または `undefined` である可能性があります

lodash と完全に互換性があるように、`join` 関数は `array` を次のように処理します。

- `array` が `ArrayLike<T>` の場合、`Array.from(...)` を使用して配列に変換します。
- `array` が `null` または `undefined` の場合、空の配列と見なされます。

:::

- `separator` (`string`) - 要素を結合するために用いるセパレータ、デフォルトは一般的なセパレータ `,` です。

### 戻り値

(`string`): - 指定されたセパレータで結合された配列のすべての要素を含む文字列を返します。

## 例

```typescript
const arr = ['a', 'b', 'c'];
const result = join(arr, '~');
console.log(result); // Output: "a~b~c"
```
