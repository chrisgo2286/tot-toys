export interface CartItem {
    id: number,
    toy__id: number,
    toy__name: string,
    toy__description: string,
    quantity: number,
    toy__photo: string,
    total: number
}
