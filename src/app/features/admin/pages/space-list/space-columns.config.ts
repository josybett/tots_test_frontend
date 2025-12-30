import { Space } from '../../services/space.service';

import { MCColumn } from '@mckit/core';

export const SPACE_COLUMNS: MCColumn[] = [
  { field: 'imageUrl', title: 'Image' },
  { field: 'name', title: 'Space Name', isSortable: true },
  { field: 'type', title: 'Type' },
  { field: 'capacity', title: 'Capacity' },
  { field: 'status', title: 'Status' },
  { field: 'actions', title: 'Actions' },
];
