---
title: Programming languages 
date: "2021-05-10T12:34:04.000"
description: "Deciding what's best for you"
---

There are plenty of programming languages out there. Each of them have unique ways of solving problems, both from an internal and practical point of view. Because of this, it's not uncommon to see people who will advocate for a particular language more than others, sometimes reaching the point of reverence and evangelization.

I'm not afraid to say I've been in both teams. When I started working I was a ruthless defender of Python. I loved all the things that the language and the community involved, and this is not necessarily a problem (it's still one of my favourite languages). The problem comes when that sort of fanaticism turns out being hatred for languages different from yours. I've had endless conversations with my senior developers about how bad X or Y language were. The funny thing is that most of my reasons were aesthetic, which makes it even sillier, as in my opinion that should never be the reason to consider a language better than others (it can define your preference, but that's it).

Let's put some examples from some different programming languages. We are going to create a function that, given a string containing numbers separated by comma, we want to extract those numbers and return the sum of all of them.

Implementation with Java

.. code-block:: java

  public static int countNumbers() {
      String sNumbers = "1, 2, 3, 4";
      String sNumbersArray[] = sNumbers.split(", ");
      int[] numbers = new int[sNumbersArray.length];
      int acc = 0;
      for(int i = 0; i < sNumbersArray.length; i++) {
          acc += Integer.parseInt(sNumbersArray[i]);
      }
      return acc;
  }

Implementation with Elixir

.. code-block:: elixir

    def count_numbers() do
        s_numbers = "1, 2, 3, 4"
        String.split(s_numbers, ", ")
            |> Enum.map(&String.to_integer/1)
            |> Enum.reduce(fn x, acc -> x + acc end)

Implementation in Python:

.. code-block:: python

    def count_numbers():
        s_numbers = "1, 2, 3, 4"
        return sum([int(n) for n in s_numbers.split(", ")])

Of course there are other possible solutions, I just wanted to make a point here. At a glance some people will have a clear idea of what was their favourite solution:

- Java because is more clear
- Elixir because is concise and understandable
- Python because is short and powerful

Well, all those answers are correct. I like to move between languages because I like different parts of them and the language itself forces me to shape my mind differently to reach the same solution, which helps staying fresh.

There is one last point I wanted to talk about on this matter: it's not the same a production, professional environment than your pet project at home. On a company you need to take other things in consideration like: language expertise on the company, maintainability (sometimes weakly typed languages are a bit hard to maintain as you don't know somestimes what are the variables you are working with) or infrastructure (it's not the same to launch a Java app than a Python one).

In conclusion, most of the times the programming language choice (specially on a home project) is up to you. In 99% of the production apps out there, the language is not an impediment to deliver a product of quality (most of the times your performance issues are because of your code, not because of the language).
