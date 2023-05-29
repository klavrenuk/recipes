export interface IListOption {
    key: string,
    label: string,
    type?: string
    subtype?: string,
    isRequired?: boolean
}

export interface IListItem {
    value: string
}