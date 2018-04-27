// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { borderRadius, colors, grid } from '../constants';
import type { Quote } from '../types';
import type { DraggableProvided } from 'react-beautiful-dnd';

type Props = {
  quote: Quote,
  isDragging: boolean,
  provided: DraggableProvided,
  autoFocus?: boolean,
  author: any
}

const Container = styled.a`
border-radius: 4px;
/* border: 1px solid grey; */
background-color: #fff;
opacity:  ${({ isDragging }) => (isDragging ? 0.8 : 1)};
/* box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px ${colors.shadow}` : 'none')}; */
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
padding: ${grid}px;
min-height: 40px;
margin-bottom: 16px;
user-select: none;
transition: background-color 0.1s ease;
box-sizing: border-box;

/* anchor overrides */
color: ${colors.black};

&:hover {
  color: ${colors.black};
  text-decoration: none;
}
&:focus {
  border: 2px solid #00A3F5;
  box-shadow: none;
}

/* flexbox */
display: flex;
align-items: center;
`;

const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: ${grid}px;
margin-left: ${grid}px;
flex-shrink: 0;
flex-grow: 0;
`;

const Content = styled.div`
/* flex child */
flex-grow: 1;

/* Needed to wrap text in ie11 */
/* https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox */
flex-basis: 100%

/* flex parent */
display: flex;
flex-direction: column;
`;

const HeaderQuote = styled.div`
font-weight:bold;
flex-grow: 1;
`;

const BlockQuote = styled.div`
&::before {
  content: open-quote;
}

&::after {
  content: close-quote;
}
`;

const QuoteWrapp = styled.div`
display: flex;
margin-top: ${grid}px;
`;

const QuoteId = styled.small`
flex-grow: 0;
margin: 0;
`;

const Attribution = styled.small`
margin: 0;
margin-left: ${grid}px;
text-align: right;
flex-grow: 1;
`;

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
export default class QuoteItem extends React.PureComponent<Props> {
  componentDidMount() {
    if (!this.props.autoFocus) {
      return;
    }

    // eslint-disable-next-line react/no-find-dom-node
    const node: HTMLElement = (ReactDOM.findDOMNode(this) : any);
    node.focus();
  }

  render() {
    const { quote, isDragging, provided, author } = this.props;
    
    return (
      <Container
        href={quote.url}
        isDragging={isDragging}
        innerRef={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        
        <Content>
          <QuoteWrapp>
            <HeaderQuote>{quote.header}</HeaderQuote>
            <Avatar src={author.avatarUrl} alt={author.name} />
          </QuoteWrapp>
          <BlockQuote>{quote.content}</BlockQuote>
          <QuoteWrapp>
            <QuoteId>(id: {quote.uid})</QuoteId>
            <Attribution>{author.username}</Attribution>
          </QuoteWrapp>
        </Content>
       
      </Container>
    );
  }
}

