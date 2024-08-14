#!/usr/bin/env python3
"""
This is a type-annotated function make_multiplier
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a multiplier function.

    Args:
        multiplier: The multiplier value to use in the inner function.

    Returns:
        Callable: A function that takes a float and returns its product.
    """
    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function
