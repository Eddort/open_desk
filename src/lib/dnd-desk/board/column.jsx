// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { grid, colors, borderRadius } from '../constants';
import { Draggable } from 'react-beautiful-dnd';
import type { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import QuoteList from '../primatives/quote-list';
import Title from '../primatives/title';
import type { Quote } from '../types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #3b7694;
`;

const Container = styled.div`
  margin: 8px 0;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 3px;
    top: 56px;
    border-right: 1px solid rgba(0,0,0,.15);
    z-index: 1;
    width: 0;
    height: calc(100% - 56px);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) => (isDragging ? '#eef1f5' : 'transparent')};
  transition: background-color 0.1s ease;
  
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 10px;
  }
  &:hover {
    background-color: #eef1f5;
  }
`;

type Props = {|
  title: string,
  quotes: Quote[],
  authors: any,
  index: number,
  autoFocusQuoteId: ?string,
|}

export default class Column extends Component<Props> {
  render() {
    const title: string = this.props.title;
    const quotes: Quote[] = this.props.quotes;
    const index: number = this.props.index;
    const authors: any = this.props.authors;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <Wrapper>
            <Container
              innerRef={provided.innerRef}
              {...provided.draggableProps}
            >
              <Header isDragging={snapshot.isDragging}>
                <Title
                  isDragging={snapshot.isDragging}
                  {...provided.dragHandleProps}
                >
                  {title}
                </Title>
              </Header>
              <QuoteList
                listId={title}
                listType="QUOTE"
                quotes={quotes}
                authors={authors}
                autoFocusQuoteId={this.props.autoFocusQuoteId}
              />
            </Container>
            {provided.placeholder}
          </Wrapper>
        )}

      </Draggable>
    );
  }
}
