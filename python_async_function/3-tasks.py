#!/usr/bin/env python3
"""
This is a function
"""


import asyncio
import importlib

module_name = "0_basic_async_syntax"
wait_random = getattr(importlib.import_module(module_name), 'wait_random')


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates an asyncio.Task from the wait_random coroutine.

    Args:
        max_delay (int): Maximum delay for the wait_random coroutine.

    Returns:
        asyncio.Task: An asyncio Task object.
    """
    return asyncio.create_task(wait_random(max_delay))
