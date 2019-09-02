import KeyValuePair from './keyValuePair';

export default interface FilterModel {
    title: string
    filter_field: string
    items: Array<KeyValuePair>
}