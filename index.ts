import { Observable } from "rxjs";

export interface Message<T = any> {
	messageType: string,
	content?: T
}

export interface Connection<T = any> {
	id: number;
	messages$: Observable<Message<T>>,
	send: (payload: Message<T>) => void
}