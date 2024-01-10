import {RowID, RowElement } form './interface';

import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(newRowID);
