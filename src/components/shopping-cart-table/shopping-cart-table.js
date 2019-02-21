import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Wrapper } from '../app/app';
import { bookDelete, 
        bookAddedToCart, 
        bookRemove } from '../../actions';



const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {

        const { id, title, count, total } = item;

        return(
            <TableTR key={ id }>
                <TableTD>{ idx + 1 }</TableTD>
                <TableTD>{ title }</TableTD>
                <TableTD>{ count }</TableTD>
                <TableTD>${ total }</TableTD>
                <TableTD>
                    <TableButton className="btn btn-outline-success btn-small" onClick={ () => onIncrease(id) }>
                        <TableButtonIcon className="fa fa-plus-circle"></TableButtonIcon>
                    </TableButton>
                    <TableButton className="btn btn-outline-warning btn-small" onClick={ () => onDecrease(id) }>
                        <TableButtonIcon className="fa fa-minus-circle"></TableButtonIcon>
                    </TableButton>
                    <TableButton className="btn btn-outline-danger btn-small" onClick={ () => onDelete(id) }>
                        <TableButtonIcon className="fa fa-trash-o"></TableButtonIcon>
                    </TableButton>
                </TableTD>
            </TableTR>
        );
    };

    return(
        <Wrapper>
            <TableTitle>Your order</TableTitle>
            <Table className="table">
                <TableHead>
                    <TableTR>
                        <TableTH>#</TableTH>
                        <TableTH>Item</TableTH>
                        <TableTH>Count</TableTH>
                        <TableTH>Price</TableTH>
                        <TableTH>Action</TableTH>
                    </TableTR>
                </TableHead>
                <TableBody>
                    { items.map(renderRow) }
                </TableBody>
            </Table>
            <TableTotal>Total: ${ total }</TableTotal>
        </Wrapper>
    )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};
 
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemove,
    onDelete: bookDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);


const TableTitle = styled.h2`

`;

const Table = styled.table``;
const TableHead = styled.thead``;
const TableTH = styled.th``;
const TableBody = styled.tbody``;
const TableTR = styled.tr``;
const TableTD = styled.td``;
const TableButton = styled.button`
    margin-right: 10px;    
    &:last-child{
        margin-right: 0;
    }
`;
const TableButtonIcon = styled.i``;
const TableTotal = styled.div`
    font-size: 25px;
    text-align: right;
`;