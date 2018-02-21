import ListPage from '../base/List';

export default class List extends ListPage {
  setupObject() {
    return super.setupObject().then(
      (res) => {
        res.entities.forEach((s) => {
          s.displayName = `${s.uid} - ${s.name}`;
        });             
        return res;
      }
    );    
  }  
};
List.entityName = 'Location';
