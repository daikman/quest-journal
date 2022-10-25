export let JOURNAL = [];
export let JOURNAL_HISTORY = []
export let SELECTED_INDEX = 0
export let SELECTED_JOURNAL = 0
export let DELETED = []

export function modifyJournal(data) {
  JOURNAL = data
}

export function modifySelected(data) {
  SELECTED_INDEX = data
}

export function pushHistory(data) {
  JOURNAL_HISTORY.push(data)
}

export function spliceHistory() {
  JOURNAL_HISTORY.splice(JOURNAL_HISTORY.length - 1, 1)
}

export const DEFAULT_JOURNAL = [
    {
      "id": "default",
      "title": "Tutorial",
      "description": "Your guide to Quest Journal",
      "quests": [
        {
          "title": "The quest panel",
          "tasks": [
            {
              "name": "Create a new quest",
              "complete": false,
              "subs": [
                { "name": "Press the '+' symbol next to 'Quests' in the left panel", "complete": false }
              ]
            },
            {
              "name": "Edit a quest title",
              "complete": false,
              "subs": [
                { "name": "Click on a quest title and type something", "complete": false }
              ]
            },
            {
              "name": "Select a quest",
              "complete": false,
              "subs": [
                { "name": "Click the circle on the left of any quest title", "complete": false }
              ]
            }
          ],
          "reward": "",
          "i": "0",
          "selected": true
        },
        {
          "title": "The task panel",
          "tasks": [
            {
              "name": "Create a new task",
              "complete": false,
              "subs": [
                { "name": "Press the '+' symbol next to 'Tasks' in the right panel", "complete": false }
              ]
            },
            {
              "name": "Create a new sub-task",
              "complete": false,
              "subs": [
                { "name": "Press the '+' symbol next to the title of any task", "complete": false }
              ]
            },
            {
              "name": "Complete a task/sub-task",
              "complete": false,
              "subs": [
                { "name": "Click the circle next to any task or sub-task to show that it is completed", "complete": false }
              ]
            },
            {
              "name": "Delete a task/sub-task",
              "complete": false,
              "subs": [
                { "name": "Click the '-' icon next to any task or sub-task", "complete": false }
              ]
            },
            {
              "name": "Edit a task/sub-task",
              "complete": false,
              "subs": [
                { "name": "Click on any text in the 'Tasks' panel and type something", "complete": false }
              ]
            }
          ],
          "reward": "",
          "i": "0",
          "selected": true
        }
      ]
    }
  ]
  