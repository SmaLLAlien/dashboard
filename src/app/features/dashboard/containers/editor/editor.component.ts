import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ITodo, NAVIGATION} from '../../../../appConfig';
import {takeWhile, tap} from 'rxjs/operators';
import {EditorService} from '../../services/editor.service';
import {LoginService} from '../../../../core/login.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  todoForm: FormGroup;
  isValueChanged = false;
  isEdit = false;
  isAdmin = this.loginService.isAdmin;

  private id: string;
  private isAlive = true;
  private todo: ITodo;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private editorService: EditorService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.todoForm = this.formInit();
    this.initSubscription();
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.isEdit = true;
      this.editorService.getTodo(this.id)
        .subscribe(data => {
          this.todo = data;
          this.todoForm.patchValue(this.todo);
          this.createLinksArray(this.todo.links);
        });
    }
  }

  formInit() {
    return this.fb.group({
      header: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      description: [null, [Validators.maxLength(255)]],
      links: this.createLinksArray([]),
    });
  }

  createLinksArray(links) {
    if (links && links.length) {
      links.forEach(link => {
        this.links.push(this.fb.control([`${link}`]));
      });
    }
    return this.fb.array([]);
  }

  initSubscription() {
    this.todoForm.valueChanges
      .pipe(
        takeWhile(() => this.isAlive)
      )
      .subscribe(() => this.isValueChanged = true);
  }

  get links(): FormArray {
    return this.todoForm.get('links') as FormArray;
  }

  get header(): FormControl {
    return this.todoForm.get('header') as FormControl;
  }

  get description(): FormControl {
    return this.todoForm.get('description') as FormControl;
  }

  edit(): void {
    if (this.todoForm.invalid) {
      return;
    }
    this.editorService.edit(this.todoForm.value, this.id)
      .pipe(
        tap(() => this.router.navigate([NAVIGATION.dashboard]))
      )
      .subscribe();
  }

  save() {
    if (this.todoForm.invalid) {
      return;
    }

    this.editorService.save(this.todoForm.value)
      .pipe(
        tap(() => this.router.navigate([NAVIGATION.dashboard]))
      )
      .subscribe();
  }

  addLink(): void {
    this.links.push(this.fb.control(''));
  }

  removeLink(): void {
    this.links.removeAt(this.links.length - 1);
  }

  cancel(): void {
    this.router.navigate([NAVIGATION.dashboard]);
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
