// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Column from './column';
// import { colors } from '../constants';
import reorder, { reorderQuoteMap } from '../reorder';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import type {
  DropResult,
  DragStart,
  DraggableLocation,
  DroppableProvided,
} from 'react-beautiful-dnd';
import type { QuoteMap, DeskData } from '../types';

const publishOnDragStart= (state) => { console.log(state, '111') };
const publishOnDragEnd = (state) => { console.log(state, '222') };

const ParentContainer = styled.div`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.div`
  min-height: 100vh;

  /* like display:flex but will allow bleeding over the window width */
  min-width: 100vw;
  display: inline-flex;
`;

type Props = {|
  initial: DeskData,
  containerHeight?: string,
|}

type State = {|
  columns: QuoteMap,
  ordered: string[],
  authors: any,
  autoFocusQuoteId: ?string,
|}

export default class Board extends Component<Props, State> {
  /* eslint-disable react/sort-comp */
  
  state: State = {
    columns: this.props.initial.quotes,
    authors: this.props.initial.authors,
    ordered: Object.keys(this.props.initial.quotes),
    autoFocusQuoteId: null,
  }

  boardRef: ?HTMLElement

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      columns: nextProps.initial.quotes,
      authors: nextProps.initial.authors,
      ordered: Object.keys(nextProps.initial.quotes),
      autoFocusQuoteId: null,
    })
  }
  
  onDragStart = (initial: DragStart) => {
    publishOnDragStart(initial);

    this.setState({
      autoFocusQuoteId: null,
    });
  }

  onDragEnd = (result: DropResult) => {
    publishOnDragEnd(result);
    console.log(result)
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source: DraggableLocation = result.source;
    const destination: DraggableLocation = result.destination;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId &&
      source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const ordered: string[] = reorder(
        this.state.ordered,
        source.index,
        destination.index
      );
      console.log(ordered, '22223sss33')
      this.setState({
        ordered,
      });

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.quoteMap,
      autoFocusQuoteId: data.autoFocusQuoteId,
    });
  }

  render() {
    const columns: QuoteMap = this.state.columns;
    const ordered: string[] = this.state.ordered;
    const authors: any = this.state.authors;
    const { containerHeight } = this.props;

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={true}
      >
        {(provided: DroppableProvided) => (
          <Container innerRef={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key: string, index: number) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
                authors={authors}
                autoFocusQuoteId={this.state.autoFocusQuoteId}
              />
            ))}
          </Container>
        )}
      </Droppable>
    );

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        {this.props.containerHeight ? (
          <ParentContainer height={containerHeight}>{board}</ParentContainer>
        ) : (
          board
        )}
      </DragDropContext>
    );
  }
}
