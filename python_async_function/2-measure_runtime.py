#!/usr/bin/env python3
"""
This is a function
"""


import time
import asyncio

wait_n_module = __import__('1-concurrent_coroutines')
wait_n = wait_n_module.wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total runtime of executing wait_n(n, max_delay)
    and returns the average time per coroutine.

    Args:
        n (int): Number of coroutines to spawn.
        max_delay (int): Maximum delay for each coroutine.

    Returns:
        float: Average runtime per coroutine.
    """
    start_time = time.time()
    await wait_n(n, max_delay)
    end_time = time.time()

    total_time = end_time - start_time
    return total_time / n
