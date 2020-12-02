function Item(props) {
    return (props.data || []).map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.itemCode}</td>
            </tr>
        );
    });
}
export default Item;
