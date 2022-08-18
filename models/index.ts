export interface IProducts {
  id: number,
  category: string,
  img: string,
  price: number,
  title: string,
  isSale: boolean
  salePercent?: number
}
