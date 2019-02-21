import React from 'react';
import styled from 'styled-components';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, imgLink } = book;

    return(
        <BookList>
            <BookPicture>
                <Picture  src={imgLink}/>
            </BookPicture>
            <BookDetails>
                <BookTitle href="#">{title}</BookTitle>
                <BookAuthor>{author}</BookAuthor>
                <BookPrice>${price}</BookPrice>
                <BookButton 
                    onClick={onAddedToCart}
                    className="btn btn-info">Add to cart</BookButton>
            </BookDetails>
        </BookList>
    );
};

export default BookListItem;

const DefaultLink = styled.a`
    display: block;
    text-decoration: none;
    transition: .25s ease;
    &:hover{
        text-decoration: none;
        transition: .25s ease;
    }
`;
const BookTitle = styled(DefaultLink)`
    font-size: 24px;
`;
const BookAuthor = styled.span``;
const BookPrice = styled.span`
    font-size: 21px;

`;
const BookList = styled.li`
    display: flex;
    list-style-type: none;
    border-radius: 3px;
    padding: 5px;
    margin:10px 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    &:last-child{
        border: none;
    }
`;
const BookButton = styled.button``;

const BookDetails = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
const BookPicture = styled.div`
    margin-right: 30px;
`;
const Picture = styled.img`
    width: 100px;    
`;