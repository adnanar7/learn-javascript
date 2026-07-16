# JavaScript `localStorage`

`localStorage` is a built-in **Web Storage API** in JavaScript that allows you to store data in the browser as **key-value pairs**. The data persists even after the user closes the browser or restarts their computer, until it is explicitly removed.

Think of it as a small database inside the browser.

---

# Why Use `localStorage`?

Without `localStorage`:

- User refreshes the page → all JavaScript variables are lost.
- User closes the browser → everything is gone.

With `localStorage`:

- Data remains saved.
- When the user comes back later, you can retrieve it.

Common use cases include:

- Saving a user's dark/light mode preference
- Shopping carts
- To-do lists
- Notes applications
- Chrome extension data (such as a Lead Tracker)

---

# Basic Syntax

## Store Data

```javascript
localStorage.setItem("name", "Adnan");
```

This stores:

| Key | Value |
|------|-------|
| `name` | `Adnan` |

---

## Retrieve Data

```javascript
let username = localStorage.getItem("name");

console.log(username);
```

**Output**

```text
Adnan
```

---

## Remove One Item

```javascript
localStorage.removeItem("name");
```

---

## Remove Everything

```javascript
localStorage.clear();
```

---

# Example

```javascript
let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    localStorage.setItem("username", input.value);
});
```

If the user enters:

```text
John
```

The browser stores:

```text
username → John
```

Even after refreshing the page, the value is still available.

---

# Reading the Value Later

```javascript
let username = localStorage.getItem("username");

console.log(username);
```

**Output**

```text
John
```

---

# Storing Arrays and Objects

One important thing to remember:

> **`localStorage` can only store strings.**

This works:

```javascript
localStorage.setItem("age", "20");
```

However, this doesn't work as expected:

```javascript
let fruits = ["Apple", "Banana"];

localStorage.setItem("fruits", fruits);
```

The array is automatically converted into a string:

```text
Apple,Banana
```

The array structure is lost.

---

## The Correct Way: `JSON.stringify()`

Convert the array into a JSON string before storing it.

```javascript
let fruits = ["Apple", "Banana"];

localStorage.setItem("fruits", JSON.stringify(fruits));
```

The stored value becomes:

```text
["Apple","Banana"]
```

---

## Convert It Back with `JSON.parse()`

```javascript
let fruits = JSON.parse(localStorage.getItem("fruits"));

console.log(fruits);
```

**Output**

```javascript
["Apple", "Banana"]
```

Now `fruits` is a real JavaScript array again.

---

# Storing Objects

```javascript
let user = {
    name: "Adnan",
    age: 20
};

localStorage.setItem("user", JSON.stringify(user));
```

Retrieve it later:

```javascript
let user = JSON.parse(localStorage.getItem("user"));

console.log(user.name);
```

**Output**

```text
Adnan
```

---

# Where Is the Data Stored?

You can inspect `localStorage` in your browser.

1. Open your website.
2. Press **F12** or right-click → **Inspect**.
3. Go to the **Application** tab (Chrome/Edge).
4. Expand **Local Storage**.
5. Select your website.

You'll see something similar to:

| Key | Value |
|------|-------|
| `username` | `John` |
| `theme` | `dark` |
| `leads` | `["google.com","youtube.com"]` |

---

# `localStorage` vs JavaScript Variables

### JavaScript Variable

```javascript
let score = 10;
```

After refreshing the page:

```text
score ❌ Gone
```

---

### `localStorage`

```javascript
localStorage.setItem("score", 10);
```

After refreshing the page:

```text
score ✅ Still available
```

---

# `localStorage` vs `sessionStorage`

| Feature | `localStorage` | `sessionStorage` |
|---------|----------------|------------------|
| Survives page refresh | ✅ Yes | ✅ Yes |
| Survives closing browser | ✅ Yes | ❌ No |
| Persists until removed | ✅ Yes | ❌ No |
| Storage size | ~5–10 MB (browser-dependent) | ~5–10 MB (browser-dependent) |

---

# Example: Lead Tracker

```javascript
let myLeads = [];
```

Save a lead:

```javascript
myLeads.push(inputEl.value);

localStorage.setItem("myLeads", JSON.stringify(myLeads));
```

Load saved leads when the page opens:

```javascript
let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    render(myLeads);
}
```

The saved leads remain available even after refreshing or reopening the browser.

---

# Summary

- `localStorage` is browser storage for **persistent data**.
- It stores **key-value pairs**.
- Both **keys** and **values** are stored as **strings**.
- Use:
  - `setItem(key, value)` to save data.
  - `getItem(key)` to retrieve data.
  - `removeItem(key)` to remove a single item.
  - `clear()` to remove all stored data.
- To store arrays or objects:
  - Convert them to strings with `JSON.stringify()`.
  - Convert them back using `JSON.parse()`.

For projects like a **Chrome Extension Lead Tracker**, `localStorage` is what allows your saved leads to remain available even after closing and reopening the browser.
