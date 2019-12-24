import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  todo: Todo = {
    task: "Test 1 2 3",
    createdAt: new Date().getTime(),
    priority: 2
  };
  todoId = null;

  constructor(
    private todoSrvc: TodoService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if(this.todoId) this.loadTodo();
  }

  async loadTodo() {
    const loading = await this.loadingCtrl.create({
      message: "Loading to-do..."
    });
    await loading.present();

    this.todoSrvc.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingCtrl.create({
      message: "Saving to-do..."
    });
    await loading.present();

    if(this.todoId) {
      this.todoSrvc.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('home');
      });
    }
    else {
      this.todoSrvc.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('home');
      });
    }
  }
}
