import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Int "mo:base/Int";

actor DKeeper {

  public type Note = {
    title : Text;
    content : Text;
  };

  var notes : List.List<Note> = List.nil<Note>();

  public func createNote(titleText : Text, contentText : Text) {

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show (notes));
  };

  public query func readNotes() : async [Note] {
    return List.toArray(notes);
  };

  public func removeNote(index : Nat) {
    let listFront = List.take(notes, index);
    // var n = List.size(notes);
    let listBack = List.drop(notes, index +1);

    notes := List.append(listFront, listBack);
  };
};
