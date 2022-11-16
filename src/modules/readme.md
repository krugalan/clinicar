# MODULES

EN: The modules are in charge of managing the information, obtaining it, updating it and its correct typing and persistence in the global state.
Each module contains as far as possible the following files:

- actions.ts: asynchronous functions that execute services
- services.ts: requests to APIs that will be used by the actions.
- reducers.ts: reducers built from a Redux Toolkit createReducer builder
- selectors.ts: selectors created from the Redux Toolkit's createSelector to get properties from the global state.
- typings.d.ts: types and interfaces for each module defining the types of the properties that will be specified in each corresponding model.

SP: Los módulos son los encargados de gestionar la información, su obtención, su actualización y su correcto tipado y persistencia en el estado global.
Cada módulo contiene en lo posible los siguientes archivos:

- actions.ts: funciones asíncronas que ejecutan servicios
- services.ts: peticiones a APIs que serán utilizadas por las actions.
- reducers.ts: reducers construidos a partir de un createReducer builder de Redux Toolkit
- selectors.ts: selectores creados a partir de createSelector de Redux Toolkit para obtener propiedades del estado global.
- typings.d.ts: tipos e interfaces para cada modulo definiendo los tipos de las propiedades que van a estar especificadas en cada modelo correspondiente.
