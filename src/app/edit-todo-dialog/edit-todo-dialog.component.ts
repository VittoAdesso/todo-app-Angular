import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

  onformSubmit(form: NgForm ){

  }

}
