import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../app/app';


const ShoppingCartTable = () => {
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
                    <TableTR>
                        <TableTD>1</TableTD>
                        <TableTD>The fountainhead</TableTD>
                        <TableTD>2</TableTD>
                        <TableTD>$30</TableTD>
                        <TableTD>
                            <TableButton className="btn btn-outline-danger btn-small">
                                <TableButtonIcon className="fa fa-trash-o"></TableButtonIcon>
                            </TableButton>
                            <TableButton className="btn btn-outline-success btn-small">
                                <TableButtonIcon className="fa fa-plus-circle"></TableButtonIcon>
                            </TableButton>
                            <TableButton className="btn btn-outline-warning btn-small">
                                <TableButtonIcon className="fa fa-minus-circle"></TableButtonIcon>
                            </TableButton>
                        </TableTD>
                    </TableTR>
                </TableBody>
            </Table>
            <TableTotal>Total: $201</TableTotal>
        </Wrapper>
    )
};


export default ShoppingCartTable;


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