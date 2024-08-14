#!/usr/bin/env python3
"""
This is a type-annotated function to_kv
"""


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is the string `k`,
    represented as a float.

    Args:
        k (str): A string key.
        v (Union[int, float]): An integer or float value.

    Returns:
        Tuple[str, float]: A tuple where the first element is `k`
    """
    return (k, float(v ** 2))
