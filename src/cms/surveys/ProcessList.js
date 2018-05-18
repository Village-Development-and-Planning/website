export default Object.assign(
  class extends require('./List') {},
  {
    columnsOrder: 'name enabled createdOn'.split(' ')
  }
);