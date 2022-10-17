export interface reviewItemsType {
  productInfo: {
    color: string
    degree: number
    graphicDiameter: number
    pcs: number
    period: number
    productId: number
    produtImageUrl: string
    productName: string
  }[]
  replyInfo: {
    orderId: number
    productDetailsId: number
    replyComment: string
    replyCreatedAt: string
    replyId: number
    replyImageUrl: string
    replyRating: number
  }
}
