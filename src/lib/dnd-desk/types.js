// @flow
import type { DraggableId, DraggableLocation } from 'react-beautiful-dnd';

export type Id = string;

export type Author = {|
  id: Id,
  name: string,
  avatarUrl: string,
  url: string,
|}

export type Quote = {|
  id: Id,
  content: string,
  authorId: string
|}

export type Dragging = {|
  id: DraggableId,
  location: DraggableLocation,
|}

export type QuoteMap = {
  [key: string]: Quote[]
}

export type DeskData = {
  quotes: QuoteMap,
  authors: any
}

export type Task = {|
  id: Id,
  content: string,
|}
